"use client";

import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { SafeUser, safeListing } from "@/app/types";
import Heading from "@/app/components/Heading";
import Container from "@/app/components/Container";
import ListingCard from "../components/ListingCard";

interface YachtClientProps {
  listings: safeListing[];
  currentUser?: SafeUser | null;
}

const YachtClient: React.FC<YachtClientProps> = ({ listings, currentUser }) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");

  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);

      axios
        .delete(`/api/listings/${id}`)
        .then(() => {
          toast.success("listing deleted");
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );

  return (
    <Container>
      <Heading title="Yachts" subtitle="List of your yachts" />
      <div
        className="
          mt-10
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
      >
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            data={listing}
            actionId={listing.id}
            onAction={onCancel}
            disabled={deletingId === listing.id}
            actionLabel="Delete Yacht"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default YachtClient;
