import React from 'react'
import { userData } from '../../../dummyData'
import Chart from '../../chart/Chart'

import FeaturedInfo from '../../featuredinfo/FeaturedInfo'
import WidgetLg from '../../widgetLg/WidgetLg'
import WidgetSm from '../../widgetSm/WidgetSm'
import './home.css'
export default function Home() {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className='homeWidgets'>
            <WidgetSm/>
            <WidgetLg/>

            </div>
        </div>
    )
}
