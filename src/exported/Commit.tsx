import IconCommitFill0Wght100Grad0Opsz48 from '../components/CommitFill0Wght100Grad0Opsz48'
import IconCommitFill0Wght200Grad0Opsz48 from '../components/CommitFill0Wght200Grad0Opsz48'
import IconCommitFill0Wght300Grad0Opsz48 from '../components/CommitFill0Wght300Grad0Opsz48'
import IconCommitFill0Wght400Grad0Opsz48 from '../components/CommitFill0Wght400Grad0Opsz48'
import IconCommitFill0Wght500Grad0Opsz48 from '../components/CommitFill0Wght500Grad0Opsz48'
import IconCommitFill0Wght600Grad0Opsz48 from '../components/CommitFill0Wght600Grad0Opsz48'
import IconCommitFill0Wght700Grad0Opsz48 from '../components/CommitFill0Wght700Grad0Opsz48'
import IconCommitFill1Wght100Grad0Opsz48 from '../components/CommitFill1Wght100Grad0Opsz48'
import IconCommitFill1Wght200Grad0Opsz48 from '../components/CommitFill1Wght200Grad0Opsz48'
import IconCommitFill1Wght300Grad0Opsz48 from '../components/CommitFill1Wght300Grad0Opsz48'
import IconCommitFill1Wght400Grad0Opsz48 from '../components/CommitFill1Wght400Grad0Opsz48'
import IconCommitFill1Wght500Grad0Opsz48 from '../components/CommitFill1Wght500Grad0Opsz48'
import IconCommitFill1Wght600Grad0Opsz48 from '../components/CommitFill1Wght600Grad0Opsz48'
import IconCommitFill1Wght700Grad0Opsz48 from '../components/CommitFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCommit = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCommitFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCommitFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCommitFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCommitFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCommitFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCommitFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCommitFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCommitFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCommitFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCommitFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCommitFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCommitFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCommitFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCommitFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
