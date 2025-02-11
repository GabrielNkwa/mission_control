import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Trash2 } from "lucide-react";
import type { Waypoint } from "./types/mission";

interface WaypointListProps {
  waypoints: Waypoint[];
  onWaypointClick: (waypoint: Waypoint) => void;
  onWaypointDelete: (id: string) => void;
}

const WaypointList: React.FC<WaypointListProps> = ({ waypoints, onWaypointClick, onWaypointDelete }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Waypoints</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {waypoints.map((waypoint) => (
          <div
            key={waypoint.id}
            className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent cursor-pointer"
            onClick={() => onWaypointClick(waypoint)}
          >
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 mt-1 text-muted-foreground" />
              <div>
                <h3 className="font-semibold">{waypoint.name}</h3>
                {waypoint.description && <p className="text-sm text-muted-foreground">{waypoint.description}</p>}
                {waypoint.estimatedArrival && (
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {new Date(waypoint.estimatedArrival).toLocaleString()}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge
                variant={
                  waypoint.status === "completed"
                    ? "default"
                    : waypoint.status === "active"
                    ? "secondary"
                    : "outline"
                }
              >
                {waypoint.status}
              </Badge>
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  e.stopPropagation();
                  onWaypointDelete(waypoint.id);
                }}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
        {waypoints.length === 0 && (
          <div className="text-center text-muted-foreground py-8">
            No waypoints added yet. Click on the map to add waypoints.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WaypointList;