import IconArrowDropDownFill0Wght100Grad0Opsz48 from '../components/ArrowDropDownFill0Wght100Grad0Opsz48'
import IconArrowDropDownFill0Wght200Grad0Opsz48 from '../components/ArrowDropDownFill0Wght200Grad0Opsz48'
import IconArrowDropDownFill0Wght300Grad0Opsz48 from '../components/ArrowDropDownFill0Wght300Grad0Opsz48'
import IconArrowDropDownFill0Wght400Grad0Opsz48 from '../components/ArrowDropDownFill0Wght400Grad0Opsz48'
import IconArrowDropDownFill0Wght500Grad0Opsz48 from '../components/ArrowDropDownFill0Wght500Grad0Opsz48'
import IconArrowDropDownFill0Wght600Grad0Opsz48 from '../components/ArrowDropDownFill0Wght600Grad0Opsz48'
import IconArrowDropDownFill0Wght700Grad0Opsz48 from '../components/ArrowDropDownFill0Wght700Grad0Opsz48'
import IconArrowDropDownFill1Wght100Grad0Opsz48 from '../components/ArrowDropDownFill1Wght100Grad0Opsz48'
import IconArrowDropDownFill1Wght200Grad0Opsz48 from '../components/ArrowDropDownFill1Wght200Grad0Opsz48'
import IconArrowDropDownFill1Wght300Grad0Opsz48 from '../components/ArrowDropDownFill1Wght300Grad0Opsz48'
import IconArrowDropDownFill1Wght400Grad0Opsz48 from '../components/ArrowDropDownFill1Wght400Grad0Opsz48'
import IconArrowDropDownFill1Wght500Grad0Opsz48 from '../components/ArrowDropDownFill1Wght500Grad0Opsz48'
import IconArrowDropDownFill1Wght600Grad0Opsz48 from '../components/ArrowDropDownFill1Wght600Grad0Opsz48'
import IconArrowDropDownFill1Wght700Grad0Opsz48 from '../components/ArrowDropDownFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconArrowDropDown = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconArrowDropDownFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconArrowDropDownFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconArrowDropDownFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconArrowDropDownFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconArrowDropDownFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconArrowDropDownFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconArrowDropDownFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconArrowDropDownFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconArrowDropDownFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconArrowDropDownFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconArrowDropDownFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconArrowDropDownFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconArrowDropDownFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconArrowDropDownFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
