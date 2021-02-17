import React from 'react'
import {Card, CardContent, Typography} from "@material-ui/core";

const InfoBox = ({title, cases, total}) => {
    return (
        <div>
            <Card className="infoBox">
                <CardContent>
                    <Typography className="infoBox_title" color="textSecondary">{title}</Typography>
                    <h2 className="infoBox_cases">{cases}</h2>
                    <Typography color="textSecondary" className="infoBox_total">{total} Total</Typography>
                </CardContent>

            </Card>
            
        </div>
    )
}

export default InfoBox
