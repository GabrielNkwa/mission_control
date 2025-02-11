import { useState } from "react"
import type { Mission, Waypoint } from "../types/mission"
import { v4 as uuidv4 } from "uuid"

export function useMission(initialMission?: Mission) {
  const [mission, setMission] = useState<Mission>(
    initialMission || {
      id: uuidv4(),
      title: "New Mission",
      description: "",
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
      waypoints: [],
      status: "draft",
    },
  )

  const addWaypoint = (waypoint: Omit<Waypoint, "id" | "status">) => {
    const newWaypoint: Waypoint = {
      ...waypoint,
      id: uuidv4(),
      status: "pending",
    }
    setMission((prev) => ({
      ...prev,
      waypoints: [...prev.waypoints, newWaypoint],
    }))
  }

  const updateWaypoint = (id: string, updates: Partial<Waypoint>) => {
    setMission((prev) => ({
      ...prev,
      waypoints: prev.waypoints.map((wp) => (wp.id === id ? { ...wp, ...updates } : wp)),
    }))
  }

  const removeWaypoint = (id: string) => {
    setMission((prev) => ({
      ...prev,
      waypoints: prev.waypoints.filter((wp) => wp.id !== id),
    }))
  }

  const updateMission = (updates: Partial<Mission>) => {
    setMission((prev) => ({ ...prev, ...updates }))
  }

  return {
    mission,
    addWaypoint,
    updateWaypoint,
    removeWaypoint,
    updateMission,
  }
}

