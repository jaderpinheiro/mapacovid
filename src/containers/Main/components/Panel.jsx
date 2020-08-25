import React, {memo} from 'react';
//import RefreshIcon from '../../../assests/images/carregando.svg';
import {Card, Typography, Button, Select, MenuItem} from '../../../components/';
import Countries from '../../../commons/constants/countries'
import {CardPanelContentStyled, ItemStyled } from './style';

const navigatorHasShare = navigator.share

function Panel({ updateAt, onChange, data, country, getCoviddata}){
    const { cases, recovered, deaths, todayCases, todayDetahs} = data

    const renderCountries =( country, index)=>{
        return(
        <MenuItem key={`country-${index}`} value={country.value}>
            <ItemStyled>
                <div>{country.label} </div>
                <img src={country.flag} alt={`País-${country.label}`} width={40}  />
            </ItemStyled>
        </MenuItem>
        )
    }
    const textCovid19 =`País:  ${country} - Recuperados: ${recovered} - Casos: ${cases} - Mortes: ${deaths} 
    - Casos Hoje: ${todayCases} - Mortes Hoje ${todayDetahs}`;

    const copyInfo = () => {
        navigator.clipboard.writeText(textCovid19)
    }
    const shareInfo=() =>{
        navigator.share({
            title:`Dados do Covid19 - ${country}`,
            text: textCovid19,
            url:'https://covid19dio.netlify.app/'
        })
    }

    const renderShareButton =(
        <div>
            <Button variant="contained" color="primary" onClick={shareInfo}>
                Compartilhar
            </Button>
        </div>
    )

    const renderCopyButton = (
        <div>
            <Button variant="caontainer" color="primary" onClick={copyInfo}>
                Copiar
            </Button>
        </div>
    )   

    return (
        <Card>
            <CardPanelContentStyled>
                <div>
                    <Typography variant="h4" component="span" color="primary">
                    COVID-19
                    </Typography>
                    <Typography variant="h6" component="h6" color="primary">
                    Painel Corona Vírus
                    </Typography>
                    <Typography variant="p" component="p" color="primary">
                    Atualizado em: {updateAt}
                    </Typography>
                    <div className="t-2">
                        <Select onChange={onChange} value={country}>
                            {Countries.map(renderCountries)}
                        </Select>
                    </div>
                </div>
                {navigatorHasShare ? renderShareButton : renderCopyButton}
            </CardPanelContentStyled>
        </Card>
    )
}

export default memo(Panel);