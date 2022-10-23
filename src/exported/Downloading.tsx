import IconDownloadingFill0Wght100Grad0Opsz48 from '../components/DownloadingFill0Wght100Grad0Opsz48'
import IconDownloadingFill0Wght200Grad0Opsz48 from '../components/DownloadingFill0Wght200Grad0Opsz48'
import IconDownloadingFill0Wght300Grad0Opsz48 from '../components/DownloadingFill0Wght300Grad0Opsz48'
import IconDownloadingFill0Wght400Grad0Opsz48 from '../components/DownloadingFill0Wght400Grad0Opsz48'
import IconDownloadingFill0Wght500Grad0Opsz48 from '../components/DownloadingFill0Wght500Grad0Opsz48'
import IconDownloadingFill0Wght600Grad0Opsz48 from '../components/DownloadingFill0Wght600Grad0Opsz48'
import IconDownloadingFill0Wght700Grad0Opsz48 from '../components/DownloadingFill0Wght700Grad0Opsz48'
import IconDownloadingFill1Wght100Grad0Opsz48 from '../components/DownloadingFill1Wght100Grad0Opsz48'
import IconDownloadingFill1Wght200Grad0Opsz48 from '../components/DownloadingFill1Wght200Grad0Opsz48'
import IconDownloadingFill1Wght300Grad0Opsz48 from '../components/DownloadingFill1Wght300Grad0Opsz48'
import IconDownloadingFill1Wght400Grad0Opsz48 from '../components/DownloadingFill1Wght400Grad0Opsz48'
import IconDownloadingFill1Wght500Grad0Opsz48 from '../components/DownloadingFill1Wght500Grad0Opsz48'
import IconDownloadingFill1Wght600Grad0Opsz48 from '../components/DownloadingFill1Wght600Grad0Opsz48'
import IconDownloadingFill1Wght700Grad0Opsz48 from '../components/DownloadingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDownloading = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDownloadingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDownloadingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDownloadingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDownloadingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDownloadingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDownloadingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDownloadingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDownloadingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDownloadingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDownloadingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDownloadingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDownloadingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDownloadingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDownloadingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
