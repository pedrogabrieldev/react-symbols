import IconTextFieldsFill0Wght100Grad0Opsz48 from '../components/TextFieldsFill0Wght100Grad0Opsz48'
import IconTextFieldsFill0Wght200Grad0Opsz48 from '../components/TextFieldsFill0Wght200Grad0Opsz48'
import IconTextFieldsFill0Wght300Grad0Opsz48 from '../components/TextFieldsFill0Wght300Grad0Opsz48'
import IconTextFieldsFill0Wght400Grad0Opsz48 from '../components/TextFieldsFill0Wght400Grad0Opsz48'
import IconTextFieldsFill0Wght500Grad0Opsz48 from '../components/TextFieldsFill0Wght500Grad0Opsz48'
import IconTextFieldsFill0Wght600Grad0Opsz48 from '../components/TextFieldsFill0Wght600Grad0Opsz48'
import IconTextFieldsFill0Wght700Grad0Opsz48 from '../components/TextFieldsFill0Wght700Grad0Opsz48'
import IconTextFieldsFill1Wght100Grad0Opsz48 from '../components/TextFieldsFill1Wght100Grad0Opsz48'
import IconTextFieldsFill1Wght200Grad0Opsz48 from '../components/TextFieldsFill1Wght200Grad0Opsz48'
import IconTextFieldsFill1Wght300Grad0Opsz48 from '../components/TextFieldsFill1Wght300Grad0Opsz48'
import IconTextFieldsFill1Wght400Grad0Opsz48 from '../components/TextFieldsFill1Wght400Grad0Opsz48'
import IconTextFieldsFill1Wght500Grad0Opsz48 from '../components/TextFieldsFill1Wght500Grad0Opsz48'
import IconTextFieldsFill1Wght600Grad0Opsz48 from '../components/TextFieldsFill1Wght600Grad0Opsz48'
import IconTextFieldsFill1Wght700Grad0Opsz48 from '../components/TextFieldsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTextFields = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTextFieldsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTextFieldsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTextFieldsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTextFieldsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTextFieldsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTextFieldsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTextFieldsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTextFieldsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTextFieldsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTextFieldsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTextFieldsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTextFieldsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTextFieldsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTextFieldsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
