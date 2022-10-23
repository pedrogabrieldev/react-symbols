import IconCheckBoxFill0Wght100Grad0Opsz48 from '../components/CheckBoxFill0Wght100Grad0Opsz48'
import IconCheckBoxFill0Wght200Grad0Opsz48 from '../components/CheckBoxFill0Wght200Grad0Opsz48'
import IconCheckBoxFill0Wght300Grad0Opsz48 from '../components/CheckBoxFill0Wght300Grad0Opsz48'
import IconCheckBoxFill0Wght400Grad0Opsz48 from '../components/CheckBoxFill0Wght400Grad0Opsz48'
import IconCheckBoxFill0Wght500Grad0Opsz48 from '../components/CheckBoxFill0Wght500Grad0Opsz48'
import IconCheckBoxFill0Wght600Grad0Opsz48 from '../components/CheckBoxFill0Wght600Grad0Opsz48'
import IconCheckBoxFill0Wght700Grad0Opsz48 from '../components/CheckBoxFill0Wght700Grad0Opsz48'
import IconCheckBoxFill1Wght100Grad0Opsz48 from '../components/CheckBoxFill1Wght100Grad0Opsz48'
import IconCheckBoxFill1Wght200Grad0Opsz48 from '../components/CheckBoxFill1Wght200Grad0Opsz48'
import IconCheckBoxFill1Wght300Grad0Opsz48 from '../components/CheckBoxFill1Wght300Grad0Opsz48'
import IconCheckBoxFill1Wght400Grad0Opsz48 from '../components/CheckBoxFill1Wght400Grad0Opsz48'
import IconCheckBoxFill1Wght500Grad0Opsz48 from '../components/CheckBoxFill1Wght500Grad0Opsz48'
import IconCheckBoxFill1Wght600Grad0Opsz48 from '../components/CheckBoxFill1Wght600Grad0Opsz48'
import IconCheckBoxFill1Wght700Grad0Opsz48 from '../components/CheckBoxFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCheckBox = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCheckBoxFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCheckBoxFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCheckBoxFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCheckBoxFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCheckBoxFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCheckBoxFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCheckBoxFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCheckBoxFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCheckBoxFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCheckBoxFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCheckBoxFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCheckBoxFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCheckBoxFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCheckBoxFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
