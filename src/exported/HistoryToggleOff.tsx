import IconHistoryToggleOffFill0Wght100Grad0Opsz48 from '../components/HistoryToggleOffFill0Wght100Grad0Opsz48'
import IconHistoryToggleOffFill0Wght200Grad0Opsz48 from '../components/HistoryToggleOffFill0Wght200Grad0Opsz48'
import IconHistoryToggleOffFill0Wght300Grad0Opsz48 from '../components/HistoryToggleOffFill0Wght300Grad0Opsz48'
import IconHistoryToggleOffFill0Wght400Grad0Opsz48 from '../components/HistoryToggleOffFill0Wght400Grad0Opsz48'
import IconHistoryToggleOffFill0Wght500Grad0Opsz48 from '../components/HistoryToggleOffFill0Wght500Grad0Opsz48'
import IconHistoryToggleOffFill0Wght600Grad0Opsz48 from '../components/HistoryToggleOffFill0Wght600Grad0Opsz48'
import IconHistoryToggleOffFill0Wght700Grad0Opsz48 from '../components/HistoryToggleOffFill0Wght700Grad0Opsz48'
import IconHistoryToggleOffFill1Wght100Grad0Opsz48 from '../components/HistoryToggleOffFill1Wght100Grad0Opsz48'
import IconHistoryToggleOffFill1Wght200Grad0Opsz48 from '../components/HistoryToggleOffFill1Wght200Grad0Opsz48'
import IconHistoryToggleOffFill1Wght300Grad0Opsz48 from '../components/HistoryToggleOffFill1Wght300Grad0Opsz48'
import IconHistoryToggleOffFill1Wght400Grad0Opsz48 from '../components/HistoryToggleOffFill1Wght400Grad0Opsz48'
import IconHistoryToggleOffFill1Wght500Grad0Opsz48 from '../components/HistoryToggleOffFill1Wght500Grad0Opsz48'
import IconHistoryToggleOffFill1Wght600Grad0Opsz48 from '../components/HistoryToggleOffFill1Wght600Grad0Opsz48'
import IconHistoryToggleOffFill1Wght700Grad0Opsz48 from '../components/HistoryToggleOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHistoryToggleOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHistoryToggleOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHistoryToggleOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHistoryToggleOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHistoryToggleOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHistoryToggleOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHistoryToggleOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHistoryToggleOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHistoryToggleOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHistoryToggleOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHistoryToggleOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHistoryToggleOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHistoryToggleOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHistoryToggleOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHistoryToggleOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
