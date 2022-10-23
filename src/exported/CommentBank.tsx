import IconCommentBankFill0Wght100Grad0Opsz48 from '../components/CommentBankFill0Wght100Grad0Opsz48'
import IconCommentBankFill0Wght200Grad0Opsz48 from '../components/CommentBankFill0Wght200Grad0Opsz48'
import IconCommentBankFill0Wght300Grad0Opsz48 from '../components/CommentBankFill0Wght300Grad0Opsz48'
import IconCommentBankFill0Wght400Grad0Opsz48 from '../components/CommentBankFill0Wght400Grad0Opsz48'
import IconCommentBankFill0Wght500Grad0Opsz48 from '../components/CommentBankFill0Wght500Grad0Opsz48'
import IconCommentBankFill0Wght600Grad0Opsz48 from '../components/CommentBankFill0Wght600Grad0Opsz48'
import IconCommentBankFill0Wght700Grad0Opsz48 from '../components/CommentBankFill0Wght700Grad0Opsz48'
import IconCommentBankFill1Wght100Grad0Opsz48 from '../components/CommentBankFill1Wght100Grad0Opsz48'
import IconCommentBankFill1Wght200Grad0Opsz48 from '../components/CommentBankFill1Wght200Grad0Opsz48'
import IconCommentBankFill1Wght300Grad0Opsz48 from '../components/CommentBankFill1Wght300Grad0Opsz48'
import IconCommentBankFill1Wght400Grad0Opsz48 from '../components/CommentBankFill1Wght400Grad0Opsz48'
import IconCommentBankFill1Wght500Grad0Opsz48 from '../components/CommentBankFill1Wght500Grad0Opsz48'
import IconCommentBankFill1Wght600Grad0Opsz48 from '../components/CommentBankFill1Wght600Grad0Opsz48'
import IconCommentBankFill1Wght700Grad0Opsz48 from '../components/CommentBankFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCommentBank = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCommentBankFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCommentBankFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCommentBankFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCommentBankFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCommentBankFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCommentBankFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCommentBankFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCommentBankFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCommentBankFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCommentBankFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCommentBankFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCommentBankFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCommentBankFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCommentBankFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
