import IconWhereToVoteFill0Wght100Grad0Opsz48 from '../components/WhereToVoteFill0Wght100Grad0Opsz48'
import IconWhereToVoteFill0Wght200Grad0Opsz48 from '../components/WhereToVoteFill0Wght200Grad0Opsz48'
import IconWhereToVoteFill0Wght300Grad0Opsz48 from '../components/WhereToVoteFill0Wght300Grad0Opsz48'
import IconWhereToVoteFill0Wght400Grad0Opsz48 from '../components/WhereToVoteFill0Wght400Grad0Opsz48'
import IconWhereToVoteFill0Wght500Grad0Opsz48 from '../components/WhereToVoteFill0Wght500Grad0Opsz48'
import IconWhereToVoteFill0Wght600Grad0Opsz48 from '../components/WhereToVoteFill0Wght600Grad0Opsz48'
import IconWhereToVoteFill0Wght700Grad0Opsz48 from '../components/WhereToVoteFill0Wght700Grad0Opsz48'
import IconWhereToVoteFill1Wght100Grad0Opsz48 from '../components/WhereToVoteFill1Wght100Grad0Opsz48'
import IconWhereToVoteFill1Wght200Grad0Opsz48 from '../components/WhereToVoteFill1Wght200Grad0Opsz48'
import IconWhereToVoteFill1Wght300Grad0Opsz48 from '../components/WhereToVoteFill1Wght300Grad0Opsz48'
import IconWhereToVoteFill1Wght400Grad0Opsz48 from '../components/WhereToVoteFill1Wght400Grad0Opsz48'
import IconWhereToVoteFill1Wght500Grad0Opsz48 from '../components/WhereToVoteFill1Wght500Grad0Opsz48'
import IconWhereToVoteFill1Wght600Grad0Opsz48 from '../components/WhereToVoteFill1Wght600Grad0Opsz48'
import IconWhereToVoteFill1Wght700Grad0Opsz48 from '../components/WhereToVoteFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWhereToVote = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWhereToVoteFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWhereToVoteFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWhereToVoteFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWhereToVoteFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWhereToVoteFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWhereToVoteFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWhereToVoteFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWhereToVoteFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWhereToVoteFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWhereToVoteFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWhereToVoteFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWhereToVoteFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWhereToVoteFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWhereToVoteFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
