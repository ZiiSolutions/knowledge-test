import { raw } from "./raw";

export interface RoadMetaData {
  road_name: string;
  start: string;
  end: string;
  notes?: string;
}

export const ROAD_META_DATA: RoadMetaData[] = raw.Original;
