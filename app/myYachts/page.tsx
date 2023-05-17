import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getListings from "../actions/getListings";
import YachtClient from "./YachtClient";

const MyYachts = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }

  const listings = await getListings({ userId: currentUser.id });

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No yachts found"
          subtitle="Looks like you have no yachts."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <YachtClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default MyYachts;
