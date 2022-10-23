import IconHistoryFill0Wght100Grad0Opsz48 from '../components/HistoryFill0Wght100Grad0Opsz48'
import IconHistoryFill0Wght200Grad0Opsz48 from '../components/HistoryFill0Wght200Grad0Opsz48'
import IconHistoryFill0Wght300Grad0Opsz48 from '../components/HistoryFill0Wght300Grad0Opsz48'
import IconHistoryFill0Wght400Grad0Opsz48 from '../components/HistoryFill0Wght400Grad0Opsz48'
import IconHistoryFill0Wght500Grad0Opsz48 from '../components/HistoryFill0Wght500Grad0Opsz48'
import IconHistoryFill0Wght600Grad0Opsz48 from '../components/HistoryFill0Wght600Grad0Opsz48'
import IconHistoryFill0Wght700Grad0Opsz48 from '../components/HistoryFill0Wght700Grad0Opsz48'
import IconHistoryFill1Wght100Grad0Opsz48 from '../components/HistoryFill1Wght100Grad0Opsz48'
import IconHistoryFill1Wght200Grad0Opsz48 from '../components/HistoryFill1Wght200Grad0Opsz48'
import IconHistoryFill1Wght300Grad0Opsz48 from '../components/HistoryFill1Wght300Grad0Opsz48'
import IconHistoryFill1Wght400Grad0Opsz48 from '../components/HistoryFill1Wght400Grad0Opsz48'
import IconHistoryFill1Wght500Grad0Opsz48 from '../components/HistoryFill1Wght500Grad0Opsz48'
import IconHistoryFill1Wght600Grad0Opsz48 from '../components/HistoryFill1Wght600Grad0Opsz48'
import IconHistoryFill1Wght700Grad0Opsz48 from '../components/HistoryFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHistory = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHistoryFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHistoryFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHistoryFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHistoryFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHistoryFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHistoryFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHistoryFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHistoryFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHistoryFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHistoryFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHistoryFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHistoryFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHistoryFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHistoryFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
