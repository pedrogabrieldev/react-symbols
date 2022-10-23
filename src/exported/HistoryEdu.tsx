import IconHistoryEduFill0Wght100Grad0Opsz48 from '../components/HistoryEduFill0Wght100Grad0Opsz48'
import IconHistoryEduFill0Wght200Grad0Opsz48 from '../components/HistoryEduFill0Wght200Grad0Opsz48'
import IconHistoryEduFill0Wght300Grad0Opsz48 from '../components/HistoryEduFill0Wght300Grad0Opsz48'
import IconHistoryEduFill0Wght400Grad0Opsz48 from '../components/HistoryEduFill0Wght400Grad0Opsz48'
import IconHistoryEduFill0Wght500Grad0Opsz48 from '../components/HistoryEduFill0Wght500Grad0Opsz48'
import IconHistoryEduFill0Wght600Grad0Opsz48 from '../components/HistoryEduFill0Wght600Grad0Opsz48'
import IconHistoryEduFill0Wght700Grad0Opsz48 from '../components/HistoryEduFill0Wght700Grad0Opsz48'
import IconHistoryEduFill1Wght100Grad0Opsz48 from '../components/HistoryEduFill1Wght100Grad0Opsz48'
import IconHistoryEduFill1Wght200Grad0Opsz48 from '../components/HistoryEduFill1Wght200Grad0Opsz48'
import IconHistoryEduFill1Wght300Grad0Opsz48 from '../components/HistoryEduFill1Wght300Grad0Opsz48'
import IconHistoryEduFill1Wght400Grad0Opsz48 from '../components/HistoryEduFill1Wght400Grad0Opsz48'
import IconHistoryEduFill1Wght500Grad0Opsz48 from '../components/HistoryEduFill1Wght500Grad0Opsz48'
import IconHistoryEduFill1Wght600Grad0Opsz48 from '../components/HistoryEduFill1Wght600Grad0Opsz48'
import IconHistoryEduFill1Wght700Grad0Opsz48 from '../components/HistoryEduFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHistoryEdu = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHistoryEduFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHistoryEduFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHistoryEduFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHistoryEduFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHistoryEduFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHistoryEduFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHistoryEduFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHistoryEduFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHistoryEduFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHistoryEduFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHistoryEduFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHistoryEduFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHistoryEduFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHistoryEduFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
