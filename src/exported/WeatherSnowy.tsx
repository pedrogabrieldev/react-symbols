import IconWeatherSnowyFill0Wght100Grad0Opsz48 from '../components/WeatherSnowyFill0Wght100Grad0Opsz48'
import IconWeatherSnowyFill0Wght200Grad0Opsz48 from '../components/WeatherSnowyFill0Wght200Grad0Opsz48'
import IconWeatherSnowyFill0Wght300Grad0Opsz48 from '../components/WeatherSnowyFill0Wght300Grad0Opsz48'
import IconWeatherSnowyFill0Wght400Grad0Opsz48 from '../components/WeatherSnowyFill0Wght400Grad0Opsz48'
import IconWeatherSnowyFill0Wght500Grad0Opsz48 from '../components/WeatherSnowyFill0Wght500Grad0Opsz48'
import IconWeatherSnowyFill0Wght600Grad0Opsz48 from '../components/WeatherSnowyFill0Wght600Grad0Opsz48'
import IconWeatherSnowyFill0Wght700Grad0Opsz48 from '../components/WeatherSnowyFill0Wght700Grad0Opsz48'
import IconWeatherSnowyFill1Wght100Grad0Opsz48 from '../components/WeatherSnowyFill1Wght100Grad0Opsz48'
import IconWeatherSnowyFill1Wght200Grad0Opsz48 from '../components/WeatherSnowyFill1Wght200Grad0Opsz48'
import IconWeatherSnowyFill1Wght300Grad0Opsz48 from '../components/WeatherSnowyFill1Wght300Grad0Opsz48'
import IconWeatherSnowyFill1Wght400Grad0Opsz48 from '../components/WeatherSnowyFill1Wght400Grad0Opsz48'
import IconWeatherSnowyFill1Wght500Grad0Opsz48 from '../components/WeatherSnowyFill1Wght500Grad0Opsz48'
import IconWeatherSnowyFill1Wght600Grad0Opsz48 from '../components/WeatherSnowyFill1Wght600Grad0Opsz48'
import IconWeatherSnowyFill1Wght700Grad0Opsz48 from '../components/WeatherSnowyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWeatherSnowy = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWeatherSnowyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWeatherSnowyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWeatherSnowyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWeatherSnowyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWeatherSnowyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWeatherSnowyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWeatherSnowyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWeatherSnowyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWeatherSnowyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWeatherSnowyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWeatherSnowyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWeatherSnowyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWeatherSnowyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWeatherSnowyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
