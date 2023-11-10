/* eslint-disable camelcase -- Disabling camelcase rule as 'Enum_Customermessage_Status' and 'Enum_Customermessage_Type' are auto-generated from the backend */
import type { ReactElement } from 'react';
import { Contact } from 'design-system';
import { useSiteConfig } from "hooks";
import { CONFIG_SEARCH_ENGINE, FOOTER_CONFIG, HEADER_MENU_CONFIG } from '../config';
import { Enum_Customermessage_Status, Enum_Customermessage_Type, useAddCustomerMessageMutation } from "../gql";

function PageContact (): ReactElement {
  const {config} = useSiteConfig ();
  const isMobile = config.client?.platform.isMobile || false;
  const [addCustomerMessageMutation] = useAddCustomerMessageMutation ();


  const sendMessage = async ( data: { email: string, message: string } ): Promise<{ status: boolean }> => {
    try {
      const addMessage = await addCustomerMessageMutation ( {
        variables: {
          email: data.email,
          message: data.message,
          type: Enum_Customermessage_Type.Contact,
          status: Enum_Customermessage_Status.New
        }
      } );
      return {status: !addMessage.errors};
    } catch {
      return {status: false};
    }
  };

  return (
    <Contact
      defaultSuggestions={CONFIG_SEARCH_ENGINE}
      footer={isMobile ? FOOTER_CONFIG.footer.mobile : FOOTER_CONFIG.footer.desktop}
      headerMenu={isMobile ? HEADER_MENU_CONFIG.mobile.menu : HEADER_MENU_CONFIG.desktop.menu}
      sendMessage={sendMessage}
    />
  )
}

export default PageContact
