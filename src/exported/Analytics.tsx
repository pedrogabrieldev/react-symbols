import IconAnalyticsFill0Wght100Grad0Opsz48 from '../components/AnalyticsFill0Wght100Grad0Opsz48'
import IconAnalyticsFill0Wght200Grad0Opsz48 from '../components/AnalyticsFill0Wght200Grad0Opsz48'
import IconAnalyticsFill0Wght300Grad0Opsz48 from '../components/AnalyticsFill0Wght300Grad0Opsz48'
import IconAnalyticsFill0Wght400Grad0Opsz48 from '../components/AnalyticsFill0Wght400Grad0Opsz48'
import IconAnalyticsFill0Wght500Grad0Opsz48 from '../components/AnalyticsFill0Wght500Grad0Opsz48'
import IconAnalyticsFill0Wght600Grad0Opsz48 from '../components/AnalyticsFill0Wght600Grad0Opsz48'
import IconAnalyticsFill0Wght700Grad0Opsz48 from '../components/AnalyticsFill0Wght700Grad0Opsz48'
import IconAnalyticsFill1Wght100Grad0Opsz48 from '../components/AnalyticsFill1Wght100Grad0Opsz48'
import IconAnalyticsFill1Wght200Grad0Opsz48 from '../components/AnalyticsFill1Wght200Grad0Opsz48'
import IconAnalyticsFill1Wght300Grad0Opsz48 from '../components/AnalyticsFill1Wght300Grad0Opsz48'
import IconAnalyticsFill1Wght400Grad0Opsz48 from '../components/AnalyticsFill1Wght400Grad0Opsz48'
import IconAnalyticsFill1Wght500Grad0Opsz48 from '../components/AnalyticsFill1Wght500Grad0Opsz48'
import IconAnalyticsFill1Wght600Grad0Opsz48 from '../components/AnalyticsFill1Wght600Grad0Opsz48'
import IconAnalyticsFill1Wght700Grad0Opsz48 from '../components/AnalyticsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAnalytics = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAnalyticsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAnalyticsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAnalyticsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAnalyticsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAnalyticsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAnalyticsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAnalyticsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAnalyticsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAnalyticsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAnalyticsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAnalyticsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAnalyticsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAnalyticsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAnalyticsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
