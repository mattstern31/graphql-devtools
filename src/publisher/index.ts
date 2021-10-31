import { RemplWrapper } from "./rempl-wrapper";
import { ApolloCachePublisher } from "./publishers/apollo-cache-publisher";
import { ApolloTrackerPublisher } from "./publishers/apollo-tracker-publisher";
import { ApolloGlobalOperationsPublisher } from "./publishers/apollo-global-operations-publisher";

const remplWrapper = new RemplWrapper(
  "ctrl+shift+alt+0, command+shift+option+0"
);

const publisher = remplWrapper
  .getRempl()
  .createPublisher("apollo-devtools", (_: any, callback: any) => {
    callback(null, "script", __APOLLO_DEVTOOLS_SUBSCRIBER__);
  });

new ApolloCachePublisher(remplWrapper, publisher);
new ApolloTrackerPublisher(remplWrapper, publisher);
new ApolloGlobalOperationsPublisher(remplWrapper, publisher);