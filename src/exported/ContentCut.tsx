import IconContentCutFill0Wght100Grad0Opsz48 from '../components/ContentCutFill0Wght100Grad0Opsz48'
import IconContentCutFill0Wght200Grad0Opsz48 from '../components/ContentCutFill0Wght200Grad0Opsz48'
import IconContentCutFill0Wght300Grad0Opsz48 from '../components/ContentCutFill0Wght300Grad0Opsz48'
import IconContentCutFill0Wght400Grad0Opsz48 from '../components/ContentCutFill0Wght400Grad0Opsz48'
import IconContentCutFill0Wght500Grad0Opsz48 from '../components/ContentCutFill0Wght500Grad0Opsz48'
import IconContentCutFill0Wght600Grad0Opsz48 from '../components/ContentCutFill0Wght600Grad0Opsz48'
import IconContentCutFill0Wght700Grad0Opsz48 from '../components/ContentCutFill0Wght700Grad0Opsz48'
import IconContentCutFill1Wght100Grad0Opsz48 from '../components/ContentCutFill1Wght100Grad0Opsz48'
import IconContentCutFill1Wght200Grad0Opsz48 from '../components/ContentCutFill1Wght200Grad0Opsz48'
import IconContentCutFill1Wght300Grad0Opsz48 from '../components/ContentCutFill1Wght300Grad0Opsz48'
import IconContentCutFill1Wght400Grad0Opsz48 from '../components/ContentCutFill1Wght400Grad0Opsz48'
import IconContentCutFill1Wght500Grad0Opsz48 from '../components/ContentCutFill1Wght500Grad0Opsz48'
import IconContentCutFill1Wght600Grad0Opsz48 from '../components/ContentCutFill1Wght600Grad0Opsz48'
import IconContentCutFill1Wght700Grad0Opsz48 from '../components/ContentCutFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconContentCut = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconContentCutFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconContentCutFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconContentCutFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconContentCutFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconContentCutFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconContentCutFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconContentCutFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconContentCutFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconContentCutFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconContentCutFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconContentCutFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconContentCutFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconContentCutFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconContentCutFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
