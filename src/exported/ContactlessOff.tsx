import IconContactlessOffFill0Wght100Grad0Opsz48 from '../components/ContactlessOffFill0Wght100Grad0Opsz48'
import IconContactlessOffFill0Wght200Grad0Opsz48 from '../components/ContactlessOffFill0Wght200Grad0Opsz48'
import IconContactlessOffFill0Wght300Grad0Opsz48 from '../components/ContactlessOffFill0Wght300Grad0Opsz48'
import IconContactlessOffFill0Wght400Grad0Opsz48 from '../components/ContactlessOffFill0Wght400Grad0Opsz48'
import IconContactlessOffFill0Wght500Grad0Opsz48 from '../components/ContactlessOffFill0Wght500Grad0Opsz48'
import IconContactlessOffFill0Wght600Grad0Opsz48 from '../components/ContactlessOffFill0Wght600Grad0Opsz48'
import IconContactlessOffFill0Wght700Grad0Opsz48 from '../components/ContactlessOffFill0Wght700Grad0Opsz48'
import IconContactlessOffFill1Wght100Grad0Opsz48 from '../components/ContactlessOffFill1Wght100Grad0Opsz48'
import IconContactlessOffFill1Wght200Grad0Opsz48 from '../components/ContactlessOffFill1Wght200Grad0Opsz48'
import IconContactlessOffFill1Wght300Grad0Opsz48 from '../components/ContactlessOffFill1Wght300Grad0Opsz48'
import IconContactlessOffFill1Wght400Grad0Opsz48 from '../components/ContactlessOffFill1Wght400Grad0Opsz48'
import IconContactlessOffFill1Wght500Grad0Opsz48 from '../components/ContactlessOffFill1Wght500Grad0Opsz48'
import IconContactlessOffFill1Wght600Grad0Opsz48 from '../components/ContactlessOffFill1Wght600Grad0Opsz48'
import IconContactlessOffFill1Wght700Grad0Opsz48 from '../components/ContactlessOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconContactlessOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconContactlessOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconContactlessOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconContactlessOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconContactlessOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconContactlessOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconContactlessOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconContactlessOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconContactlessOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconContactlessOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconContactlessOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconContactlessOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconContactlessOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconContactlessOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconContactlessOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
