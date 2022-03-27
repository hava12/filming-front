import React, { useState } from "react";

const Config = () => {
    const [configs, setConfigs] = useState([]);
    return (
        <>
            <input type="file" id="fileUpload" />
            <table className={"table"}>
                <thead>
                    <tr className={"thead"}>
                        <th>No</th>
                        <th>Name</th>
                        <th>Value</th>
                        <th>BypassYn</th>
                    </tr>
                </thead>
                <tbody>{configs}</tbody>
            </table>
        </>
    );
};

export default Config;
