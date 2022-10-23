import IconCheckBoxOutlineBlankFill0Wght100Grad0Opsz48 from '../components/CheckBoxOutlineBlankFill0Wght100Grad0Opsz48'
import IconCheckBoxOutlineBlankFill0Wght200Grad0Opsz48 from '../components/CheckBoxOutlineBlankFill0Wght200Grad0Opsz48'
import IconCheckBoxOutlineBlankFill0Wght300Grad0Opsz48 from '../components/CheckBoxOutlineBlankFill0Wght300Grad0Opsz48'
import IconCheckBoxOutlineBlankFill0Wght400Grad0Opsz48 from '../components/CheckBoxOutlineBlankFill0Wght400Grad0Opsz48'
import IconCheckBoxOutlineBlankFill0Wght500Grad0Opsz48 from '../components/CheckBoxOutlineBlankFill0Wght500Grad0Opsz48'
import IconCheckBoxOutlineBlankFill0Wght600Grad0Opsz48 from '../components/CheckBoxOutlineBlankFill0Wght600Grad0Opsz48'
import IconCheckBoxOutlineBlankFill0Wght700Grad0Opsz48 from '../components/CheckBoxOutlineBlankFill0Wght700Grad0Opsz48'
import IconCheckBoxOutlineBlankFill1Wght100Grad0Opsz48 from '../components/CheckBoxOutlineBlankFill1Wght100Grad0Opsz48'
import IconCheckBoxOutlineBlankFill1Wght200Grad0Opsz48 from '../components/CheckBoxOutlineBlankFill1Wght200Grad0Opsz48'
import IconCheckBoxOutlineBlankFill1Wght300Grad0Opsz48 from '../components/CheckBoxOutlineBlankFill1Wght300Grad0Opsz48'
import IconCheckBoxOutlineBlankFill1Wght400Grad0Opsz48 from '../components/CheckBoxOutlineBlankFill1Wght400Grad0Opsz48'
import IconCheckBoxOutlineBlankFill1Wght500Grad0Opsz48 from '../components/CheckBoxOutlineBlankFill1Wght500Grad0Opsz48'
import IconCheckBoxOutlineBlankFill1Wght600Grad0Opsz48 from '../components/CheckBoxOutlineBlankFill1Wght600Grad0Opsz48'
import IconCheckBoxOutlineBlankFill1Wght700Grad0Opsz48 from '../components/CheckBoxOutlineBlankFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCheckBoxOutlineBlank = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCheckBoxOutlineBlankFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCheckBoxOutlineBlankFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCheckBoxOutlineBlankFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCheckBoxOutlineBlankFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCheckBoxOutlineBlankFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCheckBoxOutlineBlankFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCheckBoxOutlineBlankFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCheckBoxOutlineBlankFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCheckBoxOutlineBlankFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCheckBoxOutlineBlankFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCheckBoxOutlineBlankFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCheckBoxOutlineBlankFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCheckBoxOutlineBlankFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCheckBoxOutlineBlankFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
