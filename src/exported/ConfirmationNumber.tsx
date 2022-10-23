import IconConfirmationNumberFill0Wght100Grad0Opsz48 from '../components/ConfirmationNumberFill0Wght100Grad0Opsz48'
import IconConfirmationNumberFill0Wght200Grad0Opsz48 from '../components/ConfirmationNumberFill0Wght200Grad0Opsz48'
import IconConfirmationNumberFill0Wght300Grad0Opsz48 from '../components/ConfirmationNumberFill0Wght300Grad0Opsz48'
import IconConfirmationNumberFill0Wght400Grad0Opsz48 from '../components/ConfirmationNumberFill0Wght400Grad0Opsz48'
import IconConfirmationNumberFill0Wght500Grad0Opsz48 from '../components/ConfirmationNumberFill0Wght500Grad0Opsz48'
import IconConfirmationNumberFill0Wght600Grad0Opsz48 from '../components/ConfirmationNumberFill0Wght600Grad0Opsz48'
import IconConfirmationNumberFill0Wght700Grad0Opsz48 from '../components/ConfirmationNumberFill0Wght700Grad0Opsz48'
import IconConfirmationNumberFill1Wght100Grad0Opsz48 from '../components/ConfirmationNumberFill1Wght100Grad0Opsz48'
import IconConfirmationNumberFill1Wght200Grad0Opsz48 from '../components/ConfirmationNumberFill1Wght200Grad0Opsz48'
import IconConfirmationNumberFill1Wght300Grad0Opsz48 from '../components/ConfirmationNumberFill1Wght300Grad0Opsz48'
import IconConfirmationNumberFill1Wght400Grad0Opsz48 from '../components/ConfirmationNumberFill1Wght400Grad0Opsz48'
import IconConfirmationNumberFill1Wght500Grad0Opsz48 from '../components/ConfirmationNumberFill1Wght500Grad0Opsz48'
import IconConfirmationNumberFill1Wght600Grad0Opsz48 from '../components/ConfirmationNumberFill1Wght600Grad0Opsz48'
import IconConfirmationNumberFill1Wght700Grad0Opsz48 from '../components/ConfirmationNumberFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconConfirmationNumber = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconConfirmationNumberFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconConfirmationNumberFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconConfirmationNumberFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconConfirmationNumberFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconConfirmationNumberFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconConfirmationNumberFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconConfirmationNumberFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconConfirmationNumberFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconConfirmationNumberFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconConfirmationNumberFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconConfirmationNumberFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconConfirmationNumberFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconConfirmationNumberFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconConfirmationNumberFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
