import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { AlertTriangleIcon } from "lucide-react"

export default function AlertTest() {
    return <Alert>
        <AlertTriangleIcon />
        <AlertTitle>This is an alert that this is not an actual alert</AlertTitle>
        <AlertDescription>Because this is just a test alert made to test alerts</AlertDescription>
    </Alert>
}