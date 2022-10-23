import IconViewCompactAltFill0Wght100Grad0Opsz48 from '../components/ViewCompactAltFill0Wght100Grad0Opsz48'
import IconViewCompactAltFill0Wght200Grad0Opsz48 from '../components/ViewCompactAltFill0Wght200Grad0Opsz48'
import IconViewCompactAltFill0Wght300Grad0Opsz48 from '../components/ViewCompactAltFill0Wght300Grad0Opsz48'
import IconViewCompactAltFill0Wght400Grad0Opsz48 from '../components/ViewCompactAltFill0Wght400Grad0Opsz48'
import IconViewCompactAltFill0Wght500Grad0Opsz48 from '../components/ViewCompactAltFill0Wght500Grad0Opsz48'
import IconViewCompactAltFill0Wght600Grad0Opsz48 from '../components/ViewCompactAltFill0Wght600Grad0Opsz48'
import IconViewCompactAltFill0Wght700Grad0Opsz48 from '../components/ViewCompactAltFill0Wght700Grad0Opsz48'
import IconViewCompactAltFill1Wght100Grad0Opsz48 from '../components/ViewCompactAltFill1Wght100Grad0Opsz48'
import IconViewCompactAltFill1Wght200Grad0Opsz48 from '../components/ViewCompactAltFill1Wght200Grad0Opsz48'
import IconViewCompactAltFill1Wght300Grad0Opsz48 from '../components/ViewCompactAltFill1Wght300Grad0Opsz48'
import IconViewCompactAltFill1Wght400Grad0Opsz48 from '../components/ViewCompactAltFill1Wght400Grad0Opsz48'
import IconViewCompactAltFill1Wght500Grad0Opsz48 from '../components/ViewCompactAltFill1Wght500Grad0Opsz48'
import IconViewCompactAltFill1Wght600Grad0Opsz48 from '../components/ViewCompactAltFill1Wght600Grad0Opsz48'
import IconViewCompactAltFill1Wght700Grad0Opsz48 from '../components/ViewCompactAltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconViewCompactAlt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconViewCompactAltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconViewCompactAltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconViewCompactAltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconViewCompactAltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconViewCompactAltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconViewCompactAltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconViewCompactAltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconViewCompactAltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconViewCompactAltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconViewCompactAltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconViewCompactAltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconViewCompactAltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconViewCompactAltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconViewCompactAltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
