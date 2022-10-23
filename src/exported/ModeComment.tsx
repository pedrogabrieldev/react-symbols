import IconModeCommentFill0Wght100Grad0Opsz48 from '../components/ModeCommentFill0Wght100Grad0Opsz48'
import IconModeCommentFill0Wght200Grad0Opsz48 from '../components/ModeCommentFill0Wght200Grad0Opsz48'
import IconModeCommentFill0Wght300Grad0Opsz48 from '../components/ModeCommentFill0Wght300Grad0Opsz48'
import IconModeCommentFill0Wght400Grad0Opsz48 from '../components/ModeCommentFill0Wght400Grad0Opsz48'
import IconModeCommentFill0Wght500Grad0Opsz48 from '../components/ModeCommentFill0Wght500Grad0Opsz48'
import IconModeCommentFill0Wght600Grad0Opsz48 from '../components/ModeCommentFill0Wght600Grad0Opsz48'
import IconModeCommentFill0Wght700Grad0Opsz48 from '../components/ModeCommentFill0Wght700Grad0Opsz48'
import IconModeCommentFill1Wght100Grad0Opsz48 from '../components/ModeCommentFill1Wght100Grad0Opsz48'
import IconModeCommentFill1Wght200Grad0Opsz48 from '../components/ModeCommentFill1Wght200Grad0Opsz48'
import IconModeCommentFill1Wght300Grad0Opsz48 from '../components/ModeCommentFill1Wght300Grad0Opsz48'
import IconModeCommentFill1Wght400Grad0Opsz48 from '../components/ModeCommentFill1Wght400Grad0Opsz48'
import IconModeCommentFill1Wght500Grad0Opsz48 from '../components/ModeCommentFill1Wght500Grad0Opsz48'
import IconModeCommentFill1Wght600Grad0Opsz48 from '../components/ModeCommentFill1Wght600Grad0Opsz48'
import IconModeCommentFill1Wght700Grad0Opsz48 from '../components/ModeCommentFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconModeComment = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconModeCommentFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconModeCommentFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconModeCommentFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconModeCommentFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconModeCommentFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconModeCommentFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconModeCommentFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconModeCommentFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconModeCommentFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconModeCommentFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconModeCommentFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconModeCommentFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconModeCommentFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconModeCommentFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
