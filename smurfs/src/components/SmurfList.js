import React, { useEffect } from "react";
import { connect } from "react-redux";
import SmurfCard from "./SmurfCard";
import { fetchInfo } from "../actions";

const SmurfInfo = props => {
    useEffect(() => {
        props.fetchInfo();
    }, []);

    if (props.isFetching) {
        return <h3>Loading...</h3>;
    }
    return (
        <div>
            {props.error && (<div>Smurfs</div>)}
            {props.smurfData && props.smurfData.map(data => (
                <SmurfCard key={data.id} data={data} />
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfData: state.smurfData,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { fetchInfo })(SmurfInfo);
