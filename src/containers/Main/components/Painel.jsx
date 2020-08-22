import React, {memo} from 'react';
import RefreshIcon from '../../../assests/imges/carregando.svg';
import {Card, Typography, Button, Select, MenuItem} from '../../../components/';
import Countries from '../../../commons/constants/styles/'
import {CardPanelContentStyled, ItemStyled } from './style';

const navigatorHasShare = navigator.share

function Panel({ updateAt, onChange, data, country, getCoviddata}){
    const { cases, recovered, deaths, todayCases, todayCases, todayDetahs} = data

    const renderCountries =( country, index)=>{
        <MenuItem key={`country-${index}`} value={country.value}>
            <ItemStyled>
                <div>{country.label}</div>
                <img src={country.flag} alt={`País - ${country.label}`} />
            </ItemStyled>
        </MenuItem>
    }

    return (
        <Card>
            <CardPanelContentStyled>
                <div>
                    <Typography variant="h5" component="span" color="primary">
                    COVID-19
                    </Typography>
                    <Typography variant="h6" component="span" color="primary">
                    Painel Corona Vírus
                    </Typography>
                    <Typography variant="body2" component="span" color="primary">
                    Atualizado em: {updateAt}
                    </Typography>
                    <div className="´t-2">
                        <Select onChange={onChange} value={country}>
                            {Countries.map(renderCountries)}
                        </Select>
                    </div>
                </div>
            </CardPanelContentStyled>
        </Card>
    )
}