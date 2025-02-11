"use client";

import { useState, Suspense, lazy } from "react"; // Importing Suspense and lazy
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import WaypointList from "../components/waypoint-list";
import { useMission } from "../components/hooks/useMission";
import type { Waypoint } from "../components/types/mission";

// Dynamically import the map component using React.lazy
const MissionMap = lazy(() => import("../components/mission-map"));

const MissionPlanner = () => {
  const { mission, addWaypoint, updateWaypoint, removeWaypoint, updateMission } = useMission();

  const [selectedWaypoint, setSelectedWaypoint] = useState<Waypoint | null>(null);

  const handleMapClick = (lat: number, lng: number) => {
    addWaypoint({
      name: `Waypoint ${mission.waypoints.length + 1}`,
      lat,
      lng,
      description: "",
      estimatedArrival: new Date().toISOString(),
    });
  };

  return (
    <div className="container mx-auto py-6 grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Mission Details</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Input
              placeholder="Mission Title"
              value={mission.title}
              onChange={(e) => updateMission({ title: e.target.value })}
            />
            <Input
              placeholder="Mission Description"
              value={mission.description}
              onChange={(e) => updateMission({ description: e.target.value })}
            />
          </div>
          <div className="flex gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-[240px] justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {mission.startDate ? format(new Date(mission.startDate), "PPP") : <span>Start Date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={new Date(mission.startDate)}
                  onSelect={(date) => date && updateMission({ startDate: date.toISOString() })}
                />
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-[240px] justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {mission.endDate ? format(new Date(mission.endDate), "PPP") : <span>End Date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={new Date(mission.endDate)}
                  onSelect={(date) => date && updateMission({ endDate: date.toISOString() })}
                />
              </PopoverContent>
            </Popover>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-2">
              <Suspense fallback={<div>Loading map...</div>}>
                <MissionMap
                  waypoints={mission.waypoints}
                  onWaypointClick={setSelectedWaypoint}
                  onMapClick={handleMapClick}
                />
              </Suspense>
            </CardContent>
          </Card>
        </div>
        <div>
          <WaypointList
            waypoints={mission.waypoints}
            onWaypointClick={setSelectedWaypoint}
            onWaypointDelete={removeWaypoint}
          />
        </div>
      </div>
    </div>
  );
};

export default MissionPlanner;