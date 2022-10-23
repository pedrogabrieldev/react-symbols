import IconEmojiFoodBeverageFill0Wght100Grad0Opsz48 from '../components/EmojiFoodBeverageFill0Wght100Grad0Opsz48'
import IconEmojiFoodBeverageFill0Wght200Grad0Opsz48 from '../components/EmojiFoodBeverageFill0Wght200Grad0Opsz48'
import IconEmojiFoodBeverageFill0Wght300Grad0Opsz48 from '../components/EmojiFoodBeverageFill0Wght300Grad0Opsz48'
import IconEmojiFoodBeverageFill0Wght400Grad0Opsz48 from '../components/EmojiFoodBeverageFill0Wght400Grad0Opsz48'
import IconEmojiFoodBeverageFill0Wght500Grad0Opsz48 from '../components/EmojiFoodBeverageFill0Wght500Grad0Opsz48'
import IconEmojiFoodBeverageFill0Wght600Grad0Opsz48 from '../components/EmojiFoodBeverageFill0Wght600Grad0Opsz48'
import IconEmojiFoodBeverageFill0Wght700Grad0Opsz48 from '../components/EmojiFoodBeverageFill0Wght700Grad0Opsz48'
import IconEmojiFoodBeverageFill1Wght100Grad0Opsz48 from '../components/EmojiFoodBeverageFill1Wght100Grad0Opsz48'
import IconEmojiFoodBeverageFill1Wght200Grad0Opsz48 from '../components/EmojiFoodBeverageFill1Wght200Grad0Opsz48'
import IconEmojiFoodBeverageFill1Wght300Grad0Opsz48 from '../components/EmojiFoodBeverageFill1Wght300Grad0Opsz48'
import IconEmojiFoodBeverageFill1Wght400Grad0Opsz48 from '../components/EmojiFoodBeverageFill1Wght400Grad0Opsz48'
import IconEmojiFoodBeverageFill1Wght500Grad0Opsz48 from '../components/EmojiFoodBeverageFill1Wght500Grad0Opsz48'
import IconEmojiFoodBeverageFill1Wght600Grad0Opsz48 from '../components/EmojiFoodBeverageFill1Wght600Grad0Opsz48'
import IconEmojiFoodBeverageFill1Wght700Grad0Opsz48 from '../components/EmojiFoodBeverageFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEmojiFoodBeverage = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEmojiFoodBeverageFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEmojiFoodBeverageFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEmojiFoodBeverageFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEmojiFoodBeverageFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEmojiFoodBeverageFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEmojiFoodBeverageFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEmojiFoodBeverageFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEmojiFoodBeverageFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEmojiFoodBeverageFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEmojiFoodBeverageFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEmojiFoodBeverageFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEmojiFoodBeverageFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEmojiFoodBeverageFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEmojiFoodBeverageFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
