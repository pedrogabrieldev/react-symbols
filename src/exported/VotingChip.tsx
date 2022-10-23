import IconVotingChipFill0Wght100Grad0Opsz48 from '../components/VotingChipFill0Wght100Grad0Opsz48'
import IconVotingChipFill0Wght200Grad0Opsz48 from '../components/VotingChipFill0Wght200Grad0Opsz48'
import IconVotingChipFill0Wght300Grad0Opsz48 from '../components/VotingChipFill0Wght300Grad0Opsz48'
import IconVotingChipFill0Wght400Grad0Opsz48 from '../components/VotingChipFill0Wght400Grad0Opsz48'
import IconVotingChipFill0Wght500Grad0Opsz48 from '../components/VotingChipFill0Wght500Grad0Opsz48'
import IconVotingChipFill0Wght600Grad0Opsz48 from '../components/VotingChipFill0Wght600Grad0Opsz48'
import IconVotingChipFill0Wght700Grad0Opsz48 from '../components/VotingChipFill0Wght700Grad0Opsz48'
import IconVotingChipFill1Wght100Grad0Opsz48 from '../components/VotingChipFill1Wght100Grad0Opsz48'
import IconVotingChipFill1Wght200Grad0Opsz48 from '../components/VotingChipFill1Wght200Grad0Opsz48'
import IconVotingChipFill1Wght300Grad0Opsz48 from '../components/VotingChipFill1Wght300Grad0Opsz48'
import IconVotingChipFill1Wght400Grad0Opsz48 from '../components/VotingChipFill1Wght400Grad0Opsz48'
import IconVotingChipFill1Wght500Grad0Opsz48 from '../components/VotingChipFill1Wght500Grad0Opsz48'
import IconVotingChipFill1Wght600Grad0Opsz48 from '../components/VotingChipFill1Wght600Grad0Opsz48'
import IconVotingChipFill1Wght700Grad0Opsz48 from '../components/VotingChipFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVotingChip = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVotingChipFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVotingChipFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVotingChipFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVotingChipFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVotingChipFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVotingChipFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVotingChipFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVotingChipFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVotingChipFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVotingChipFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVotingChipFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVotingChipFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVotingChipFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVotingChipFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
