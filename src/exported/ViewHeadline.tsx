import IconViewHeadlineFill0Wght100Grad0Opsz48 from '../components/ViewHeadlineFill0Wght100Grad0Opsz48'
import IconViewHeadlineFill0Wght200Grad0Opsz48 from '../components/ViewHeadlineFill0Wght200Grad0Opsz48'
import IconViewHeadlineFill0Wght300Grad0Opsz48 from '../components/ViewHeadlineFill0Wght300Grad0Opsz48'
import IconViewHeadlineFill0Wght400Grad0Opsz48 from '../components/ViewHeadlineFill0Wght400Grad0Opsz48'
import IconViewHeadlineFill0Wght500Grad0Opsz48 from '../components/ViewHeadlineFill0Wght500Grad0Opsz48'
import IconViewHeadlineFill0Wght600Grad0Opsz48 from '../components/ViewHeadlineFill0Wght600Grad0Opsz48'
import IconViewHeadlineFill0Wght700Grad0Opsz48 from '../components/ViewHeadlineFill0Wght700Grad0Opsz48'
import IconViewHeadlineFill1Wght100Grad0Opsz48 from '../components/ViewHeadlineFill1Wght100Grad0Opsz48'
import IconViewHeadlineFill1Wght200Grad0Opsz48 from '../components/ViewHeadlineFill1Wght200Grad0Opsz48'
import IconViewHeadlineFill1Wght300Grad0Opsz48 from '../components/ViewHeadlineFill1Wght300Grad0Opsz48'
import IconViewHeadlineFill1Wght400Grad0Opsz48 from '../components/ViewHeadlineFill1Wght400Grad0Opsz48'
import IconViewHeadlineFill1Wght500Grad0Opsz48 from '../components/ViewHeadlineFill1Wght500Grad0Opsz48'
import IconViewHeadlineFill1Wght600Grad0Opsz48 from '../components/ViewHeadlineFill1Wght600Grad0Opsz48'
import IconViewHeadlineFill1Wght700Grad0Opsz48 from '../components/ViewHeadlineFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconViewHeadline = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconViewHeadlineFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconViewHeadlineFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconViewHeadlineFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconViewHeadlineFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconViewHeadlineFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconViewHeadlineFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconViewHeadlineFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconViewHeadlineFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconViewHeadlineFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconViewHeadlineFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconViewHeadlineFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconViewHeadlineFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconViewHeadlineFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconViewHeadlineFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
