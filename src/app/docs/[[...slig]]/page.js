export default function Docs({ params }) {
    console.log(params)
    if(params.slig?.length == 2){
        return <h1>Feature for {params.slig[0]} and for concept {params.slig[1]}</h1>
    }
    else if(params.slig?.length == 3){
        return <h1>Feature for {params.slig[0]} and for concept {params.slig[1]} and example {params.slig[2]}</h1>
    }
    return <h1>Docs Homepage</h1>
}

// Example for catch all segments in next js