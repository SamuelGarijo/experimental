import { Override, Data } from "framer"

// Estado compartido para el componente de información
const infoState = Data({
    currentVariant: "closed",
})

// Override para el componente RetroDiagramWithImages
export function RetroDiagramOverride(): Override {
    return {
        onPointClick: (infoVariant: string) => {
            infoState.currentVariant = infoVariant
        },
    }
}

// Override para el componente "+info"
export function InfoComponentOverride(): Override {
    return {
        variant: infoState.currentVariant,
    }
}
