import { useRouteError } from "react-router";
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h3>{err.status} {err.statusText}</h3>
            <h1>Opps !</h1>
            <h2>These Apge is not foud </h2>
        </div>
    )
}
export default Error;