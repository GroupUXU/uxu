/* eslint-disable camelcase -- Disabling camelcase rule as 'Enum_Customermessage_Status' and 'Enum_Customermessage_Type' are auto-generated from the backend */
import type { ReactElement } from 'react';
import { Contact } from 'design-system';
import { searchEngineConfig, footerConfig, headerMenuConfig } from '../config';
import { Enum_Customermessage_Status, Enum_Customermessage_Type, useAddCustomerMessageMutation } from "../gql";

function PageContact (): ReactElement {
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
      defaultSuggestions={searchEngineConfig}
      footer={footerConfig}
      headerMenu={headerMenuConfig}
      sendMessage={sendMessage}
    />
  )
}

export default PageContact
