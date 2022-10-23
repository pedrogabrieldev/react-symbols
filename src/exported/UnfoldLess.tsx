import IconUnfoldLessFill0Wght100Grad0Opsz48 from '../components/UnfoldLessFill0Wght100Grad0Opsz48'
import IconUnfoldLessFill0Wght200Grad0Opsz48 from '../components/UnfoldLessFill0Wght200Grad0Opsz48'
import IconUnfoldLessFill0Wght300Grad0Opsz48 from '../components/UnfoldLessFill0Wght300Grad0Opsz48'
import IconUnfoldLessFill0Wght400Grad0Opsz48 from '../components/UnfoldLessFill0Wght400Grad0Opsz48'
import IconUnfoldLessFill0Wght500Grad0Opsz48 from '../components/UnfoldLessFill0Wght500Grad0Opsz48'
import IconUnfoldLessFill0Wght600Grad0Opsz48 from '../components/UnfoldLessFill0Wght600Grad0Opsz48'
import IconUnfoldLessFill0Wght700Grad0Opsz48 from '../components/UnfoldLessFill0Wght700Grad0Opsz48'
import IconUnfoldLessFill1Wght100Grad0Opsz48 from '../components/UnfoldLessFill1Wght100Grad0Opsz48'
import IconUnfoldLessFill1Wght200Grad0Opsz48 from '../components/UnfoldLessFill1Wght200Grad0Opsz48'
import IconUnfoldLessFill1Wght300Grad0Opsz48 from '../components/UnfoldLessFill1Wght300Grad0Opsz48'
import IconUnfoldLessFill1Wght400Grad0Opsz48 from '../components/UnfoldLessFill1Wght400Grad0Opsz48'
import IconUnfoldLessFill1Wght500Grad0Opsz48 from '../components/UnfoldLessFill1Wght500Grad0Opsz48'
import IconUnfoldLessFill1Wght600Grad0Opsz48 from '../components/UnfoldLessFill1Wght600Grad0Opsz48'
import IconUnfoldLessFill1Wght700Grad0Opsz48 from '../components/UnfoldLessFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconUnfoldLess = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconUnfoldLessFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconUnfoldLessFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconUnfoldLessFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconUnfoldLessFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconUnfoldLessFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconUnfoldLessFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconUnfoldLessFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconUnfoldLessFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconUnfoldLessFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconUnfoldLessFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconUnfoldLessFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconUnfoldLessFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconUnfoldLessFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconUnfoldLessFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
