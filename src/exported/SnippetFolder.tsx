import IconSnippetFolderFill0Wght100Grad0Opsz48 from '../components/SnippetFolderFill0Wght100Grad0Opsz48'
import IconSnippetFolderFill0Wght200Grad0Opsz48 from '../components/SnippetFolderFill0Wght200Grad0Opsz48'
import IconSnippetFolderFill0Wght300Grad0Opsz48 from '../components/SnippetFolderFill0Wght300Grad0Opsz48'
import IconSnippetFolderFill0Wght400Grad0Opsz48 from '../components/SnippetFolderFill0Wght400Grad0Opsz48'
import IconSnippetFolderFill0Wght500Grad0Opsz48 from '../components/SnippetFolderFill0Wght500Grad0Opsz48'
import IconSnippetFolderFill0Wght600Grad0Opsz48 from '../components/SnippetFolderFill0Wght600Grad0Opsz48'
import IconSnippetFolderFill0Wght700Grad0Opsz48 from '../components/SnippetFolderFill0Wght700Grad0Opsz48'
import IconSnippetFolderFill1Wght100Grad0Opsz48 from '../components/SnippetFolderFill1Wght100Grad0Opsz48'
import IconSnippetFolderFill1Wght200Grad0Opsz48 from '../components/SnippetFolderFill1Wght200Grad0Opsz48'
import IconSnippetFolderFill1Wght300Grad0Opsz48 from '../components/SnippetFolderFill1Wght300Grad0Opsz48'
import IconSnippetFolderFill1Wght400Grad0Opsz48 from '../components/SnippetFolderFill1Wght400Grad0Opsz48'
import IconSnippetFolderFill1Wght500Grad0Opsz48 from '../components/SnippetFolderFill1Wght500Grad0Opsz48'
import IconSnippetFolderFill1Wght600Grad0Opsz48 from '../components/SnippetFolderFill1Wght600Grad0Opsz48'
import IconSnippetFolderFill1Wght700Grad0Opsz48 from '../components/SnippetFolderFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSnippetFolder = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSnippetFolderFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSnippetFolderFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSnippetFolderFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSnippetFolderFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSnippetFolderFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSnippetFolderFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSnippetFolderFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSnippetFolderFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSnippetFolderFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSnippetFolderFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSnippetFolderFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSnippetFolderFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSnippetFolderFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSnippetFolderFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
