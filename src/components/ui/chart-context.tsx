"use client";

import * as React from "react";

export type ChartConfig = Record<
  string,
  {
    label?: string;
    icon?: React.ComponentType<unknown>;
  }
>;

type ChartContextValue = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextValue>({ config: {} });

export function ChartProvider({ config, children }: { config?: ChartConfig; children: React.ReactNode }) {
  return (
    <ChartContext.Provider value={{ config: config ?? {} }}>{children}</ChartContext.Provider>
  );
}

export function useChart(): ChartContextValue {
  return React.useContext(ChartContext);
}


