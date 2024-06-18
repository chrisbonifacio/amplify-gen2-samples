"use client";
import { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/api";

const client = generateClient<Schema>({ authMode: "apiKey" });

export default function Home() {
  const addRacerToRace = async () => {
    const { data, errors } = await client.mutations.createRace({
      raceId: "1",
      classId: "1",
    });

    console.log(data);
  };

  const getRaceResultsByRacerId = async () => {
    const { data, errors } = await client.queries.getRaceResultsByRacerId({
      racerId: "1",
    });
  };

  const getRacesByClassID = async () => {
    const { data, errors } = await client.queries.getRacesByClassId({
      classId: "<classID>",
    });

    console.log(data);
  };

  const getBestPerformancebyClassID = async () => {
    const { data, errors } = await client.queries.getBestPerformanceByClassId({
      classId: "<classID>",
    });

    console.log(data);
  };

  const getListOfTopScoresByRaceID = async () => {
    const { data, errors } =
      await client.models.RacingTable.listByGlobalSecondaryIndex(
        {
          sk: "<raceID>",
        },
        { sortDirection: "DESC" }
      );

    console.log(data);
  };

  const getSecondBySecondPerformanceByRacerForAllRaces = async () => {
    const { data, errors } = await client.models.RacingTable.list({
      pk: "<racerID>",
    });

    console.log(data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <button onClick={addRacerToRace}>Add Racer to Race</button>
      </div>
    </main>
  );
}
