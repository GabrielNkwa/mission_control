export interface Waypoint {
    id: string
    name: string
    lat: number
    lng: number
    description?: string
    estimatedArrival?: string
    status: "pending" | "active" | "completed"
  }
  
  export interface Mission {
    id: string
    title: string
    description: string
    startDate: string
    endDate: string
    waypoints: Waypoint[]
    status: "draft" | "active" | "completed"
  }
  
  