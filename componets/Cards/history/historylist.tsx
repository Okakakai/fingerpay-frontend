import { Card } from "@chakra-ui/react";
import { HistoryCard } from "./historycard";
import { HistoryDataSet, historyDataSet } from "./variables/historydata";

export const HistoryList = () => {
  return (
    <div>
      {historyDataSet.map((item: HistoryDataSet, index) => {
        return <HistoryCard historyData={item} />;
      })}
    </div>
  );
};
