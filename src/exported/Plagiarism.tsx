import IconPlagiarismFill0Wght100Grad0Opsz48 from '../components/PlagiarismFill0Wght100Grad0Opsz48'
import IconPlagiarismFill0Wght200Grad0Opsz48 from '../components/PlagiarismFill0Wght200Grad0Opsz48'
import IconPlagiarismFill0Wght300Grad0Opsz48 from '../components/PlagiarismFill0Wght300Grad0Opsz48'
import IconPlagiarismFill0Wght400Grad0Opsz48 from '../components/PlagiarismFill0Wght400Grad0Opsz48'
import IconPlagiarismFill0Wght500Grad0Opsz48 from '../components/PlagiarismFill0Wght500Grad0Opsz48'
import IconPlagiarismFill0Wght600Grad0Opsz48 from '../components/PlagiarismFill0Wght600Grad0Opsz48'
import IconPlagiarismFill0Wght700Grad0Opsz48 from '../components/PlagiarismFill0Wght700Grad0Opsz48'
import IconPlagiarismFill1Wght100Grad0Opsz48 from '../components/PlagiarismFill1Wght100Grad0Opsz48'
import IconPlagiarismFill1Wght200Grad0Opsz48 from '../components/PlagiarismFill1Wght200Grad0Opsz48'
import IconPlagiarismFill1Wght300Grad0Opsz48 from '../components/PlagiarismFill1Wght300Grad0Opsz48'
import IconPlagiarismFill1Wght400Grad0Opsz48 from '../components/PlagiarismFill1Wght400Grad0Opsz48'
import IconPlagiarismFill1Wght500Grad0Opsz48 from '../components/PlagiarismFill1Wght500Grad0Opsz48'
import IconPlagiarismFill1Wght600Grad0Opsz48 from '../components/PlagiarismFill1Wght600Grad0Opsz48'
import IconPlagiarismFill1Wght700Grad0Opsz48 from '../components/PlagiarismFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPlagiarism = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPlagiarismFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPlagiarismFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPlagiarismFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPlagiarismFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPlagiarismFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPlagiarismFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPlagiarismFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPlagiarismFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPlagiarismFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPlagiarismFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPlagiarismFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPlagiarismFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPlagiarismFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPlagiarismFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
