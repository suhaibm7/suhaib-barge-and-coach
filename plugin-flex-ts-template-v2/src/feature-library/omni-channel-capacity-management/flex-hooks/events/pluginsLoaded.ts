import * as Flex from "@twilio/flex-ui";
import { FlexEvent } from "../../../../types/manager/FlexEvent";
import { isFeatureEnabled } from '../..';

const pluginsLoadedHandler = (flexEvent: FlexEvent) => {
  if (!isFeatureEnabled()) return;

  console.log(`Feature enabled: omni-channel-capacity-management`);
};

export default pluginsLoadedHandler;
