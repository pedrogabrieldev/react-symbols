import IconDownloadDoneFill0Wght100Grad0Opsz48 from '../components/DownloadDoneFill0Wght100Grad0Opsz48'
import IconDownloadDoneFill0Wght200Grad0Opsz48 from '../components/DownloadDoneFill0Wght200Grad0Opsz48'
import IconDownloadDoneFill0Wght300Grad0Opsz48 from '../components/DownloadDoneFill0Wght300Grad0Opsz48'
import IconDownloadDoneFill0Wght400Grad0Opsz48 from '../components/DownloadDoneFill0Wght400Grad0Opsz48'
import IconDownloadDoneFill0Wght500Grad0Opsz48 from '../components/DownloadDoneFill0Wght500Grad0Opsz48'
import IconDownloadDoneFill0Wght600Grad0Opsz48 from '../components/DownloadDoneFill0Wght600Grad0Opsz48'
import IconDownloadDoneFill0Wght700Grad0Opsz48 from '../components/DownloadDoneFill0Wght700Grad0Opsz48'
import IconDownloadDoneFill1Wght100Grad0Opsz48 from '../components/DownloadDoneFill1Wght100Grad0Opsz48'
import IconDownloadDoneFill1Wght200Grad0Opsz48 from '../components/DownloadDoneFill1Wght200Grad0Opsz48'
import IconDownloadDoneFill1Wght300Grad0Opsz48 from '../components/DownloadDoneFill1Wght300Grad0Opsz48'
import IconDownloadDoneFill1Wght400Grad0Opsz48 from '../components/DownloadDoneFill1Wght400Grad0Opsz48'
import IconDownloadDoneFill1Wght500Grad0Opsz48 from '../components/DownloadDoneFill1Wght500Grad0Opsz48'
import IconDownloadDoneFill1Wght600Grad0Opsz48 from '../components/DownloadDoneFill1Wght600Grad0Opsz48'
import IconDownloadDoneFill1Wght700Grad0Opsz48 from '../components/DownloadDoneFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDownloadDone = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDownloadDoneFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDownloadDoneFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDownloadDoneFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDownloadDoneFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDownloadDoneFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDownloadDoneFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDownloadDoneFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDownloadDoneFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDownloadDoneFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDownloadDoneFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDownloadDoneFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDownloadDoneFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDownloadDoneFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDownloadDoneFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
