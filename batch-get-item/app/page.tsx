"use client";
import { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/api";
import "@aws-amplify/ui-react/styles.css";

const client = generateClient<Schema>();

function Home() {
  const checkActivePhoneNumbers = async () => {
    const phoneNumbersToCheckFor = ["718-706-5432", "718-706-4327"];

    let { data: phoneNumbers, errors } =
      await client.queries.checkBatchOfPhoneNumbersForActiveUsers({
        phoneNumbers: phoneNumbersToCheckFor,
      });

    console.log(phoneNumbers);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={checkActivePhoneNumbers}>Check Phone Numbers</button>
    </main>
  );
}

export default Home;
