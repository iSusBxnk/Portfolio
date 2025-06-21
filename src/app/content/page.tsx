import { Suspense } from "react"
import Client from "./_client"

export function ContentSection() {
    return (
        <Suspense>
            <Client />
        </Suspense>
    )
}
