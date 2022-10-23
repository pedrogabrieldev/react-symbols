import IconCallToActionFill0Wght100Grad0Opsz48 from '../components/CallToActionFill0Wght100Grad0Opsz48'
import IconCallToActionFill0Wght200Grad0Opsz48 from '../components/CallToActionFill0Wght200Grad0Opsz48'
import IconCallToActionFill0Wght300Grad0Opsz48 from '../components/CallToActionFill0Wght300Grad0Opsz48'
import IconCallToActionFill0Wght400Grad0Opsz48 from '../components/CallToActionFill0Wght400Grad0Opsz48'
import IconCallToActionFill0Wght500Grad0Opsz48 from '../components/CallToActionFill0Wght500Grad0Opsz48'
import IconCallToActionFill0Wght600Grad0Opsz48 from '../components/CallToActionFill0Wght600Grad0Opsz48'
import IconCallToActionFill0Wght700Grad0Opsz48 from '../components/CallToActionFill0Wght700Grad0Opsz48'
import IconCallToActionFill1Wght100Grad0Opsz48 from '../components/CallToActionFill1Wght100Grad0Opsz48'
import IconCallToActionFill1Wght200Grad0Opsz48 from '../components/CallToActionFill1Wght200Grad0Opsz48'
import IconCallToActionFill1Wght300Grad0Opsz48 from '../components/CallToActionFill1Wght300Grad0Opsz48'
import IconCallToActionFill1Wght400Grad0Opsz48 from '../components/CallToActionFill1Wght400Grad0Opsz48'
import IconCallToActionFill1Wght500Grad0Opsz48 from '../components/CallToActionFill1Wght500Grad0Opsz48'
import IconCallToActionFill1Wght600Grad0Opsz48 from '../components/CallToActionFill1Wght600Grad0Opsz48'
import IconCallToActionFill1Wght700Grad0Opsz48 from '../components/CallToActionFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCallToAction = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCallToActionFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCallToActionFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCallToActionFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCallToActionFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCallToActionFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCallToActionFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCallToActionFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCallToActionFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCallToActionFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCallToActionFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCallToActionFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCallToActionFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCallToActionFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCallToActionFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
