import IconAddReactionFill0Wght100Grad0Opsz48 from '../components/AddReactionFill0Wght100Grad0Opsz48'
import IconAddReactionFill0Wght200Grad0Opsz48 from '../components/AddReactionFill0Wght200Grad0Opsz48'
import IconAddReactionFill0Wght300Grad0Opsz48 from '../components/AddReactionFill0Wght300Grad0Opsz48'
import IconAddReactionFill0Wght400Grad0Opsz48 from '../components/AddReactionFill0Wght400Grad0Opsz48'
import IconAddReactionFill0Wght500Grad0Opsz48 from '../components/AddReactionFill0Wght500Grad0Opsz48'
import IconAddReactionFill0Wght600Grad0Opsz48 from '../components/AddReactionFill0Wght600Grad0Opsz48'
import IconAddReactionFill0Wght700Grad0Opsz48 from '../components/AddReactionFill0Wght700Grad0Opsz48'
import IconAddReactionFill1Wght100Grad0Opsz48 from '../components/AddReactionFill1Wght100Grad0Opsz48'
import IconAddReactionFill1Wght200Grad0Opsz48 from '../components/AddReactionFill1Wght200Grad0Opsz48'
import IconAddReactionFill1Wght300Grad0Opsz48 from '../components/AddReactionFill1Wght300Grad0Opsz48'
import IconAddReactionFill1Wght400Grad0Opsz48 from '../components/AddReactionFill1Wght400Grad0Opsz48'
import IconAddReactionFill1Wght500Grad0Opsz48 from '../components/AddReactionFill1Wght500Grad0Opsz48'
import IconAddReactionFill1Wght600Grad0Opsz48 from '../components/AddReactionFill1Wght600Grad0Opsz48'
import IconAddReactionFill1Wght700Grad0Opsz48 from '../components/AddReactionFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAddReaction = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAddReactionFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAddReactionFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAddReactionFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAddReactionFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAddReactionFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAddReactionFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAddReactionFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAddReactionFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAddReactionFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAddReactionFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAddReactionFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAddReactionFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAddReactionFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAddReactionFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
